var app = angular.module("SubjectList", []); 
app.controller("myCtrl", function($scope) {
    $scope.subjects = [{
      "subjectname": "Construction Theory",
      "chapters": [{
          "chaptername": "Structural Engineering",
          "topics": [{
              "name": "Advanced Structural Analysis"
            },
            {
              "name": "Theory of Elasticity"
            },
            {
              "name": "Advanced Concrete Technology"
            }
          ]
        },
        {
          "chaptername": "Geotechnical Engineering",
          "topics": [{
              "name": "Advanced Soil Mechanics"
            },
            {
              "name": "Advanced Foundation"
            },
            {
              "name": "Applied Statics"
            }
          ]
        },
        {
          "chaptername": "Transportation Engineering",
          "topics": [{
              "name": "Traffic Engineering "
            },
            {
              "name": "Road Safety Engineering"
            },
            {
              "name": "Applied Statistics "
            }
          ]
        },
        {
          "chaptername": "Thermal Engineering",
          "topics": [{
              "name": "Traffic Engineering "
            },
            {
              "name": "Road Safety Engineering"
            },
            {
              "name": "Applied Statistics "
            }
          ]
        }
      ]
    },
    {
      "subjectname": "Dynamic Theory",
      "chapters": [{
          "chaptername": "Thermal Engineering",
          "topics": [{
              "name": "Advanced IC Engines "
            },
            {
              "name": "Advanced Thermodynamics "
            },
            {
              "name": "Finite Element Analysis "
            }
          ]
        },
        {
          "chaptername": "Engineering Design ",
          "topics": [{
              "name": " Mechanics of Solids "
            },
            {
              "name": "Mechanics of Machinery"
            },
            {
              "name": "Theory of Elasticity "
            }
          ]
        },
        {
          "chaptername": "Centre for Energy Studies ",
          "topics": [{
              "name": "Direct Energy Conversion "
            },
            {
              "name": "Energy Efficiency"
            },
            {
              "name": "Optimization of Energy "
            }
          ]
        },
        {
          "chaptername": "Thermo Dynamism ",
          "topics": [{
              "name": "Direct Energy Conversion "
            },
            {
              "name": "Energy Efficiency"
            },
            {
              "name": "Optimization of Energy "
            }
          ]
        }
      ]
    }
  ];
});