<!-- https://developers.weixin.qq.com/miniprogram/dev/component/button.html -->

#### button

按钮。

  属性名                   |  类型      |  默认值         |  说明                                                                                                                                         |  生效时机                     | 最低版本 
---------------------------|------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|----------
  size                     |  String    |  default        |  按钮的大小                                                                                                                                   |                               |          
  type                     |  String    |  default        |  按钮的样式类型                                                                                                                               |                               |          
  plain                    |  Boolean   |  false          |  按钮是否镂空，背景色透明                                                                                                                     |                               |          
  disabled                 |  Boolean   |  false          |  是否禁用                                                                                                                                     |                               |          
  loading                  |  Boolean   |  false          |  名称前是否带 loading 图标                                                                                                                    |                               |          
  form-type                |  String    |                 |  用于 `<form/>` 组件，点击分别会触发 `<form/>` 组件的 submit/reset 事件                                                                       |                               |          
  open-type                |  String    |                 |  微信开放能力                                                                                                                                 |                               |  1.1.0   
  hover-class              |  String    |  button-hover   |  指定按钮按下去的样式类。当 `hover-class="none"` 时，没有点击态效果                                                                           |                               |          
  hover-stop-propagation   |  Boolean   |  false          |  指定是否阻止本节点的祖先节点出现点击态                                                                                                       |                               |  1.5.0   
  hover-start-time         |  Number    |  20             |  按住后多久出现点击态，单位毫秒                                                                                                               |                               |          
  hover-stay-time          |  Number    |  70             |  手指松开后点击态保留时间，单位毫秒                                                                                                           |                               |          
  lang                     |  String    |  en             |  指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。                                                                            |  open-type="getUserInfo"      |  1.3.0   
  bindgetuserinfo          |  Handler   |                 |用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与[wx.getUserInfo](https://developers.weixin.qq.com/miniprogram/dev/api/open.html#wxgetuserinfoobject)返回的一致|  open-type="getUserInfo"      |  1.3.0   
  session-from             |  String    |                 |  会话来源                                                                                                                                     |  open-type="contact"          |  1.4.0   
  send-message-title       |  String    |  当前标题       |  会话内消息卡片标题                                                                                                                           |  open-type="contact"          |  1.5.0   
  send-message-path        |  String    |  当前分享路径   |  会话内消息卡片点击跳转小程序路径                                                                                                             |  open-type="contact"          |  1.5.0   
  send-message-img         |  String    |  截图           |  会话内消息卡片图片                                                                                                                           |  open-type="contact"          |  1.5.0   
  show-message-card        |  Boolean   |  false          |  显示会话内消息卡片                                                                                                                           |  open-type="contact"          |  1.5.0   
  bindcontact              |  Handler   |                 |  客服消息回调                                                                                                                                 |  open-type="contact"          |  1.5.0   
  bindgetphonenumber       |  Handler   |                 |  获取用户手机号回调                                                                                                                           |  open-type="getPhoneNumber"   |  1.2.0   
  app-parameter            |  String    |                 |  打开 APP 时，向 APP 传递的参数                                                                                                               |  open-type="launchApp"        |  1.9.5   
  binderror                |  Handler   |                 |  当使用开放能力时，发生错误的回调                                                                                                             |  open-type="launchApp"        |  1.9.5   
  bindopensetting          |  Handler   |                 |  在打开授权设置页后回调                                                                                                                       |  open-type="openSetting"      |  2.0.7   

*   **注1：`button-hover` 默认为`{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}`**
*   **注2：`bindgetphonenumber` 从1.2.0 开始支持，但是在1.5.3以下版本中无法使用`wx.canIUse`进行检测，建议使用基础库版本进行判断。**
*   **注3：在`bindgetphonenumber` 等返回加密信息的回调中调用 `wx.login` 登录，可能会刷新登录态。此时服务器使用 code 换取的 sessionKey 不是加密时使用的 sessionKey，导致解密失败。建议开发者提前进行 `login`；或者在回调中先使用 `checkSession` 进行登录态检查，避免 `login` 刷新登录态。**
*   **注4：从 2.1.0 起，button 可作为原生组件的子节点嵌入，以便在原生组件上使用 `open-type` 的能力**

**size 有效值：**

  值        |  说明   
------------|---------
  default   | 默认大小
  mini      |  小尺寸 

**type 有效值：**

  值        |  说明 
------------|-------
  primary   |  绿色 
  default   |  白色 
  warn      |  红色 

**form-type 有效值：**

  值       |  说明   
-----------|---------
  submit   | 提交表单
  reset    | 重置表单

**open-type 有效值：**

  值               |  说明                                                                                                                                                                     | 最低版本 
-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------
  contact          |  打开客服会话                                                                                                                                                             |  1.1.0   
  share            |  触发用户转发，使用前建议先阅读[使用指引](https://developers.weixin.qq.com/miniprogram/dev/api/share.html#使用指引)                                                       |  1.2.0   
  getUserInfo      |  获取用户信息，可以从bindgetuserinfo回调中获取到用户信息                                                                                                                  |  1.3.0   
  getPhoneNumber   |  获取用户手机号，可以从bindgetphonenumber回调中获取到用户信息，[具体说明](https://developers.weixin.qq.com/miniprogram/dev/api/getPhoneNumber.html)                       |  1.2.0   
  launchApp        |  打开APP，可以通过app-parameter属性设定向APP传的参数[具体说明](https://developers.weixin.qq.com/miniprogram/dev/api/launchApp.html)                                       |  1.9.5   
  openSetting      |  打开授权设置页                                                                                                                                                           |  2.0.7   
  feedback         |打开“意见反馈”页面，用户可提交反馈内容并上传[日志](https://developers.weixin.qq.com/miniprogram/dev/api/getLogManager.html)，开发者可以登录[小程序管理后台](https://mp.weixin.qq.com/)后进入左侧菜单“客服反馈”页面获取到反馈内容|  2.1.0   

**示例代码：**

[在开发者工具中预览效果](wechatide://minicode/ZHrWZqm66cZy "在开发者工具中预览效果")

    /** wxss **/
    /** 修改button默认的点击态样式类**/
    .button-hover {
      background-color: red;
    }
    /** 添加自定义button点击态样式类**/
    .other-button-hover {
      background-color: blue;
    }
    

    <button type="default" size="{{defaultSize}}" loading="{{loading}}" plain="{{plain}}"
    		disabled="{{disabled}}" bindtap="default" hover-class="other-button-hover"> default </button>
    <button type="primary" size="{{primarySize}}" loading="{{loading}}" plain="{{plain}}"
    		disabled="{{disabled}}" bindtap="primary"> primary </button>
    <button type="warn" size="{{warnSize}}" loading="{{loading}}" plain="{{plain}}"
    		disabled="{{disabled}}" bindtap="warn"> warn </button>
    <button bindtap="setDisabled">点击设置以上按钮disabled属性</button>
    <button bindtap="setPlain">点击设置以上按钮plain属性</button>
    <button bindtap="setLoading">点击设置以上按钮loading属性</button>
    <button open-type="contact">进入客服会话</button>
    <button open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="onGotUserInfo">获取用户信息</button>
    <button open-type="openSetting">打开授权设置页</button>
    

    var types = ['default', 'primary', 'warn']
    var pageObject = {
      data: {
        defaultSize: 'default',
        primarySize: 'default',
        warnSize: 'default',
        disabled: false,
        plain: false,
        loading: false
      },
      setDisabled: function(e) {
        this.setData({
          disabled: !this.data.disabled
        })
      },
      setPlain: function(e) {
        this.setData({
          plain: !this.data.plain
        })
      },
      setLoading: function(e) {
        this.setData({
          loading: !this.data.loading
        })
      },
      onGotUserInfo: function(e) {
        console.log(e.detail.errMsg)
        console.log(e.detail.userInfo)
        console.log(e.detail.rawData)
      },
    }
    
    for (var i = 0; i < types.length; ++i) {
      (function(type) {
        pageObject[type] = function(e) {
          var key = type + 'Size'
          var changedData = {}
          changedData[key] =
            this.data[key] === 'default' ? 'mini' : 'default'
          this.setData(changedData)
        }
      })(types[i])
    }
    
    Page(pageObject)
    

![button](https://developers.weixin.qq.com/miniprogram/dev/image/pic/button.png)

##### Bug & Tip

1.  `tip`: 目前，设置了 `form-type` 的 `button` 只会对当前组件中的 `form` 有效。因而，将 `button` 封装在自定义组件中，而 `from` 在自定义组件外，将会使这个 `button` 的 `form-type` 失效。
