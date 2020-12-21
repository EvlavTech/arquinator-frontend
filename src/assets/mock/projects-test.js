const testJson = {
  "projects": [
    {
      "name": "casa de Fernanda e Marisa",
      "progress": 100,
      "tasks": [
        {
          "name": "Levantamento",
          "done": false,
          "tasks": [
            {
              "name": "Planta de baixa",
              "done": false,
              "tasks": [
                {
                  "name": "Planta Layout",
                  "done": true,
                  "tasks": null
                },
                {
                  "name": "Planta de iluminação",
                  "done": true,
                  "tasks": null
                },
                {
                  "name": "Planta de Piso",
                  "done": false,
                  "tasks": null
                }
              ]
            }
          ]
        },
        {
          "name": 'teste',
          "done": true,
          "tasks": null
        }
      ]
    },
    {
      "name": "Apartamento de Raissa e Junior",
      "progress": 50,
      "tasks": [
        {
          "name": "Levantamento",
          "done": false,
          "tasks": [
            {
              "name": "Planta de baixa",
              "done": false,
              "tasks": [
                {
                  "name": "Planta Layout",
                  "done": false,
                  "tasks": null
                },
                {
                  "name": "Planta de iluminação",
                  "done": false,
                  "tasks": null
                },
                {
                  "name": "Planta de Piso",
                  "done": true,
                  "tasks": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default testJson;
