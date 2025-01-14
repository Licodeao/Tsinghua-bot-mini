/** 工具函数 */

/**
 * 处理token同步/异步的问题
 */
export async function getUserToken(data) {
  let app = wx.getApp();
  // 优先使用缓存数据
  let cacheToken = wx.getStorageSync("token") || app.token || "";

  if (cacheToken) {
    app.token = cacheToken;
    wx.setStorageSync("token", cacheToken);
    return {
      code: 200,
      token: cacheToken,
      message: "缓存中存在token",
    };
  }

  // 缓存中不存在token，再请求接口，并缓存数据
  // let res = await  

  let requestToken = res.code === 200 ? res.data.token : "";
  res.code !== 200 && console.log("登录请求失败!");

  app.token = requestToken;
  wx.setStorageSync("token", requestToken);

  return {
    code: res.code,
    token: requestToken,
    message: res.code === 200 ? "重新请求获取token成功" : "登录请求失败",
  };
}