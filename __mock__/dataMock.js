const dataMock = {
  "current_observation": {
		"display_location": {
		    "full":"Birmingham, AL",
		},
		"weather":"Clear",
		"temp_f":86.1,
  },

  "forecast":{
    "simpleforecast": {
      "forecastday": [
        {
          "icon":"clear",
          "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
          "date": {
            "weekday": "Monday",
            "monthname": "July",
            "day": "31st",
          },
          "high": {
            "fahrenheit": "98",
          },
          "low": {
            "fahrenheit": "70",
          },
          "fcttext":"Mainly clear. Lows overnight in the upper 60s.",
        }
      ]
    }
  },
}

export default dataMock
