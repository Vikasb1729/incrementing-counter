var counters = document.querySelectorAll('.counter')
counters.forEach(function(counter) {
    counter.innerText = '0'
    var updateCounter = function() {
        var target = Number(counter.getAttribute('data-target'))
        var c = Number(counter.innerText)
        var increment = target / 100
        if(c < target) {
            counter.innerText = `${Math.floor(c + increment)}`
            setTimeout(updateCounter, 30)
        } else {
            counter.innerText = target
        }
    }
    updateCounter()
})























