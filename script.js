function getBattery(){
  const battPercentage = document.querySelector('.battery-percentage h2')
  const battStatus = document.querySelector('.battery-status')

  navigator.getBattery().then((battery) => {
    let battLevel = Math.floor(battery.level * 100)
    battPercentage.innerHTML = `${battLevel}%`
    if(battLevel == 100){
      battStatus.innerHTML = 'Battery full'
    }else if(battLevel <= 20){
      battStatus.innerHTML = 'Battery low. Please connect to charger'
    }else if(battery.charging){
      battStatus.innerHTML = 'Charging...'
    }else{
      battStatus.innerHTML = ''
    }
  })
}

getBattery()

