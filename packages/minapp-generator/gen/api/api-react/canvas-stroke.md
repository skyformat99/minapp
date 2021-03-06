<!-- https://developers.weixin.qq.com/miniprogram/dev/api/canvas/stroke.html -->

canvasContext.stroke
====================

### 定义

画出当前路径的边框。默认颜色色为黑色。

**Tip**: `stroke()` 描绘的的路径是从 `beginPath()` 开始计算，但是不会将 `strokeRect()` 包含进去，详情见例二。

### 例子

    const ctx = wx.createCanvasContext('myCanvas')
    ctx.moveTo(10, 10)
    ctx.lineTo(100, 10)
    ctx.lineTo(100, 100)
    ctx.stroke()
    ctx.draw()
    

![](https://mp.weixin.qq.com/debug/wxadoc/dev/image/canvas/stroke-line.png)

    const ctx = wx.createCanvasContext('myCanvas')
    // begin path
    ctx.rect(10, 10, 100, 30)
    ctx.setStrokeStyle('yellow')
    ctx.stroke()
    
    // begin another path
    ctx.beginPath()
    ctx.rect(10, 40, 100, 30)
    
    // only stoke this rect, not in current path
    ctx.setStrokeStyle('blue')
    ctx.strokeRect(10, 70, 100, 30)
    
    ctx.rect(10, 100, 100, 30)
    
    // it will stroke current path
    ctx.setStrokeStyle('red')
    ctx.stroke()
    ctx.draw()
    

![](https://mp.weixin.qq.com/debug/wxadoc/dev/image/canvas/stroke-path.png)
