AFRAME.registerComponent("comic", {
    init: function (){
        this.enterLeave()
    },

    enterLeave:function(){
        this.el.addEventListener("mouseenter", ()=>{
            this.el.setAttribute("color", "blue")
        })
        this.el.addEventListener("mouseleave", ()=>{
            this.el.setAttribute("color", "navy")
            var popup = document.querySelector(`#${this.el.getAttribute("id")}popup`)
            console.log('works')
            popup.setAttribute("visible", "false")
        })
        this.el.addEventListener("click", ()=>{
            var popup = document.querySelector(`#${this.el.getAttribute("id")}popup`)

            popup.setAttribute("visible", "true")
        })
        window.addEventListener("keydown", (e)=>{
            if(e.key==="Escape"){
                var popup = document.querySelector(`#${this.el.getAttribute("id")}popup`)
                console.log('works')
                popup.setAttribute("visible", "false")
            }
        })
    }
})