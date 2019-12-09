export default function resize() {
    let el = document.getElementById('root');
    let styles = {};
    let width = window.innerWidth;
    let height = window.innerHeight;
    if (width < 1920 || height < 969) {
        let transX = parseInt(width) / 1920;
        let transY = parseInt(height) / 969;
        styles = {
            ...styles,
            'position': 'absolute',
            'transform-origin': 'left top',   //due to UI requirements
            'transform': 'scale(' + transX + ',' + transY + ')',
            '-moz-transform': 'scale(' + transX + ',' + transY + ')',
            '-webkit-transform': 'scale(' + transX + ',' + transY + ')',
            '-o-transform': 'scale(' + transX + ',' + transY + ')',
            '-ms-transform': 'scale(' + transX + ',' + transY + ')',
            'width': '1920px',
            'height': '969px',
        };
        for (let key in styles) {
            el.style[key] = styles[key];
        }
    } else {
        el.removeAttribute('style');
    }
 }
 window.onresize = resize;