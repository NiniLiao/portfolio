console.log('Its working')

Let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        Let mode = this.dataset.mode
        console.log('Option clicked:', mode)
    })
}