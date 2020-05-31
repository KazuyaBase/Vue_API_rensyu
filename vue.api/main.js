let app = new Vue({
  el: '#app',
  data: {
    city: null, // 地域名
    temp: null, // 気温
    condition: {
      main: null // 天候名
    },
    windSpeed: null, // 風速
    humidity: null
  },
  mounted: function () {
    // OpenWeather から API を取得
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=44df11963c310c95405398e456efd42a')
      .then(function(response){
        this.city = response.data.name
        this.temp = response.data.main.temp
        this.condition = response.data.weather[0]
        this.windSpeed = response.data.wind.speed
        this.humidity = response.data.main.humidity
        console.log(response)
      }.bind(this))
      .catch(function(error){
        console.log(error);
      })
  },
  filters: {
    roundUp(value) {
      return Math.ceil(value) // 小数点以下切り上げ
    }
  }
});