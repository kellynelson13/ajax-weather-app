
// api key: 9b9f5972625f3491182c4d87b8132964
//API link: https://api.openweathermap.org/data/2.5/weather?q=portland&appid=9b9f5972625f3491182c4d87b8132964

/////Variables

/////Cached Elements
const $city = $('#city')
const $temp = $('#temp')
const $feels = $('#feels')
const $weather = $('#weather')
const $input = $('#input')
const $form = $('form')

////Event Listeners
$form.on("submit", displayInfo)
////Functions
function displayInfo (e){
    e.preventDefault()
    let userInput = $input.val()
    if(userInput === '') return
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=9b9f5972625f3491182c4d87b8132964`)
    .then(function(data){
        console.log(data)
        $city.text(data.name)
        $temp.text(Math.floor((data.main.temp - 273.15)* 9/5 + 32))
        $feels.text(Math.floor((data.main.feels_like - 273.15)* 9/5 + 32))
        $weather.text(data.weather[0].description)
        $input.val('')
    }, function(error){
        console.log("Something went wrong")
    })

}











console.log('https://api.openweathermap.org/data/2.5/weather?q=portland&appid=9b9f5972625f3491182c4d87b8132964')
