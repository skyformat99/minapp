// https://mp.weixin.qq.com/debug/wxadoc/dev/api/setEnableDebug.html

export namespace wx {
  namespace setEnableDebug {
    type Param = {
      /**
       * 是否打开调试
       */
      enableDebug: boolean
      /**
       * 接口调用成功的回调函数
       */
      success?: ParamPropSuccess
      /**
       * 接口调用失败的回调函数
       */
      fail?: ParamPropFail
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?: ParamPropComplete
    }
    /**
     * 接口调用成功的回调函数
     */
    type ParamPropSuccess = (res: ParamPropSuccessParam) => any
    type ParamPropSuccessParam = {
      /**
       * 调用结果
       */
      errMsg: string
    }
    /**
     * 接口调用失败的回调函数
     */
    type ParamPropFail = (err: any) => any
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    type ParamPropComplete = () => any
  }
  /**
   * @since 1.4.0
   *
   * 设置是否打开调试开关，此开关对正式版也能生效。
   *
   * **示例代码：**
   *
   *     ```javascript
   *     // 打开调试
   *     wx.setEnableDebug({
   *         enableDebug: true
   *     })
   *
   *     // 关闭调试
   *     wx.setEnableDebug({
   *         enableDebug: false
   *     })
   *     ```
   * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/setEnableDebug.html#wxsetenabledebugobject
   */
  function setEnableDebug(OBJECT: setEnableDebug.Param): void

}
