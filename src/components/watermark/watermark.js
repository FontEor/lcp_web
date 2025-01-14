export default class WaterMark {

  constructor() {
    this.container = null;
    this.defaultOption = {
      id: 'watermark-global',
      width: 300,
      preventTamper: true,
      height: 115,
      text: 'icc-watermark',
      font: '15px Microsoft JhengHei',
      rotateDegree: 30 * Math.PI / 180,
      style: {
        'pointer-events': 'none',
        width:'100%',
        height: '100%',
        top:0,
        left:0,
        position: 'fixed',
        'z-index':5000
      }
    };
  }

  //create image base64 url via canvas
  createImageUrl(options) {
      let canvas = document.createElement('canvas');
      let text = options.text;
      canvas.width = options.width;
      canvas.height = options.height;
      let ctx = canvas.getContext('2d');
      ctx.shadowOffsetX = 2;     //X轴阴影距离，负值表示往上，正值表示往下
      ctx.shadowOffsetY = 2;     //Y轴阴影距离，负值表示往左，正值表示往右
      ctx.shadowBlur = 2;     //阴影的模糊程度
      // ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';    //阴影颜色
      ctx.font = options.font;
      ctx.fillStyle = "rgba(17, 17, 17, 0.10)";
      ctx.rotate(options.rotateDegree);
      ctx.textAlign = 'left';
      ctx.fillText(text, 35, 32);    //实体文字
      return canvas.toDataURL('image/png');
  }

  createContainer(options, forceCreate) {
      let oldDiv = document.getElementById(options.id);
      let existsOldDiv = (typeof oldDiv !== 'undefined') && oldDiv != null;
      if(!forceCreate && existsOldDiv) {
          return existsOldDiv;
      }
      let url = this.createImageUrl(options);
      let div = existsOldDiv ? oldDiv : document.createElement('div');
      div.id = options.id;

      let parentEl = options.preventTamper ? document.body : (options.parentEl || document.body);

      if(typeof parentEl === 'string') {
          if(parentEl.startsWith('#')) {
              parentEl = parentEl.substring(1);
          }
          parentEl = document.getElementById(parentEl);
      }
      let rect = parentEl.getBoundingClientRect();
      options.style.left = (options.left || rect.left) + 'px';
      options.style.top = (options.top ||rect.top) + 'px';
      div.style.cssText = this.getStyleText(options);
      div.setAttribute('class', '');
      div.style.background = 'url(' + url + ') repeat top left';
      !oldDiv && parentEl.appendChild(div);
      return div;
  };

  getStyleText(options) {
      let ret = '', style = options.style;
      Object.keys(style).forEach(function (k) {
          ret += k + ': ' + style[k] + ';'
      });
      return ret
  };

  observe(options) {
      let self = this;
      self.container = self.createContainer(options, true);
      let target = self.container;
      let observer = new MutationObserver(function() {
          observer.disconnect();
          self.container = self.createContainer(options, true);
          let config = { attributes: true, childList: true, characterData: true, subtree:true };
          observer.observe(target, config);
      });
      let config = { attributes: true, childList: true, characterData: true, subtree:true };
      observer.observe(target, config);
  };

  observeBody(options) {
      //observe body element, recreate if the element is deleted
      let self = this;
      let pObserver = new MutationObserver(function(mutations) {
          mutations.forEach(function(m) {
              let length = m.removedNodes.length;
              if(m.type === 'childList' && length > 0) {
                  let watermarkNodeRemoved = false;
                  for(let n =0; n<length; n++) {
                      if(m.removedNodes[n].id === options.id) {
                          watermarkNodeRemoved = true;
                          break;
                      }
                  }
                  if(watermarkNodeRemoved) {
                      self.observe(options, true);
                  }
              }
          });
      });
      pObserver.observe(document.body, {childList: true,subtree:true});
  };

  init(options) {
      options = !options ? this.defaultOption : Object.assign({}, this.defaultOption, options);
      this.observe(options);
      this.observeBody(options);
  };

}

