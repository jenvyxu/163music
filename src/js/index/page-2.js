{
    let view={
        el:'.page-2',
        template:``,
        init(){
            this.$el=$(this.el)
        },
        show(){
            this.$el.addClass('active')
            console.log(this.$el);
        },
        hide(){
            this.$el.removeClass('active')
        },
        render(data){
            let {songs}=data
            let i=1
            let string=''
            songs.map((song)=>{
                if(i<10){
                    string='0'+i.toString()
                }else{
                    string=i.toString()
                }
                let $li=$(`
                    <li>
                    <div class="number">${string}</div>
                    <div class="musicAndPlay">
                        <div class="music">
                          <h3>${song.name}</h3>
                         <p>
                            <svg class="icon icon-sq">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-sq"></use>
                            </svg>
                            ${song.singer}
                        </p>                   
                      </div>
                       <a class="playButton" href="./song.html?id=${song.id}">
                        <svg class="icon icon-play">
                          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-play"></use>
                        </svg>
                      </a>                              
                    </div>           
                    </li>                
                        `)
                if(i<4){
                    this.$el.find('ol.hotMusicList').append($li).find('ol.hotMusicList>li>.number').addClass('highlight')
                    this.$el.find('ol.hotMusicList>li>.number').addClass('highlight')
                }else{
                    this.$el.find('ol.hotMusicList').append($li)
                }
                i+=1
            })
        }
    }
    let model={
        data:{
            songs:[]
        },
        find(){
            var query=new AV.Query('Song');
            return query.find().then((songs)=>{
                this.data.songs=songs.map((song)=>{
                    return {id:song.id,...song.attributes}
                })
                return songs
            })
        }
    }
    let controller={
        init(view,model) {
            console.log(21212)
            this.view = view
            this.model = model
            this.view.init()
            this.model.find().then(()=>{
                this.view.render(this.model.data);
                console.log(222)
            })
            this.bindEventHub()
        },
        bindEventHub(){
            window.eventHub.on('selectTab',(tabName)=>{
                if(tabName==='page-2'){
                    this.view.show()
                }else{
                    this.view.hide()
                }
            })
        }
    }
    controller.init(view,model)
}