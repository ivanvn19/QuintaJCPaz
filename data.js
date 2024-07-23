var APP_DATA = {
  "scenes": [
    {
      "id": "0-frente-i",
      "name": "Frente I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.30276360330718255,
        "pitch": 0.053218592442366486,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 1.4066284892985959,
          "pitch": 0.0758637395558921,
          "rotation": 0,
          "target": "1-frente-ii"
        },
        {
          "yaw": -0.6004794404906342,
          "pitch": 0.08419962378667734,
          "rotation": 0.7853981633974483,
          "target": "5-vista-lateral"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-frente-ii",
      "name": "Frente II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4623190597471822,
          "pitch": 0.08202154100375836,
          "rotation": 0,
          "target": "0-frente-i"
        },
        {
          "yaw": -0.26507937183462005,
          "pitch": 0.008669472748580986,
          "rotation": 0,
          "target": "2-parque"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-parque",
      "name": "Parque",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9622139644849632,
          "pitch": -0.04308310474736565,
          "rotation": 0,
          "target": "3-prgola"
        },
        {
          "yaw": -3.0539088194359323,
          "pitch": 0.012418756737776704,
          "rotation": 0.7853981633974483,
          "target": "1-frente-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-prgola",
      "name": "Pérgola",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1738759677169153,
          "pitch": 0.057895877314493305,
          "rotation": 0,
          "target": "4-fondo"
        },
        {
          "yaw": 2.4313431790506446,
          "pitch": 0.026870134148076374,
          "rotation": 0,
          "target": "2-parque"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-fondo",
      "name": "Fondo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3768184785868183,
          "pitch": -0.02203373096939565,
          "rotation": 0,
          "target": "5-vista-lateral"
        },
        {
          "yaw": 2.6805660067579202,
          "pitch": 0.08277477452983462,
          "rotation": 0,
          "target": "3-prgola"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-vista-lateral",
      "name": "Vista Lateral",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.13757181506867155,
          "pitch": 0.029170056277028067,
          "rotation": 0,
          "target": "0-frente-i"
        },
        {
          "yaw": -2.4812166706547725,
          "pitch": 0.017731323707312896,
          "rotation": 0,
          "target": "4-fondo"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
