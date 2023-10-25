const { FacebookAdsApi, EventRequest, UserData } = require('facebook-nodejs-business-sdk');

const pixelId = '3229551200647876'; 

// Inicializa a biblioteca
FacebookAdsApi.init(process.env.FACEBOOK_APPID, process.env.FACEBOOK_APPSECRET, process.env.FACEBOOK_ACCESSTOKEN);

export default async function trackPageView() {
  try {
    const eventRequest = new EventRequest(pixelId);

    const userData = new UserData()
      .fbc('fbclid')
      .fbp('fbp');

    // Configura os dados do evento "PageView"
    const eventData = {
      event_name: 'PageView',
      event_time: Math.floor(new Date().getTime() / 1000), // Tempo do evento em segundos
      user_data: userData,
    };

    // Envia o evento "PageView"
    await eventRequest.addData(eventData).execute();
    console.log('PageView event sent successfully.');
  } catch (error) {
    console.error('Error sending PageView event:', error);
  }
}