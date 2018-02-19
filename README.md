# personalcodes
Códigos de uso em projetos.

## $pnp setup vue
estrutura inicial do vue padrão
```
$pnp.setup({
    headers: {
        "Accept": "application/json; odata=verbose"
    }
});

Vue.component('',{
	template:'',
	created: function(){
        .this.getData()
            .then(this.applyGetData, this.threatError.bind(this,'erro ao obter informações da lista'))
            .then(this.applyEvents)
	},
	methods: {
        getData: function(){
            return $pnp.sp.web.lists.getByTitle(this.listName).items
                        //.filter()
                        .select('*')
                        //.expand()
                        //.orderBy('field',true)
                        //.top()
                        .get()
        },
        applyGetData: function(data){
            this.list = data;
        }
        applyEvents: function(){

        },
        threatError: function(msg,data){
			alert('error - ' + msg);
		}
	},
	data: {
		return {
			listName: '',
			list: []
		}
	}
})

var app = new Vue({
    el: '#element',
    template: '<element/>'
})
```

## Anchor Scrolling on SharePoint - para um local específico da página.
Utilizar este código caso precise inserir uma ancora no banner que arrastará para uma sessão específica da página.
OBS: lembrar de modificar o seletor do animate caso não seja intranet e remover o "top-80", que é inserido por conta da Ribbon.
```
scrollDown: function(){
    $('#s4-workspace').animate({
        scrollTop: $("#FinUpdates").offset().top-80}
    ,'slow');
}
```

## Current Image - função para retorno de LinkImage em endereço de imagem (lists)
método que splita o valor do campo imagem (texto) preenchido via workflow.
```
currentImage: function(item){
    if(item.LinkCover){
        return item.LinkCover.split('src="')[1].split('" ')[0]
    }else{
        return '';
    }
}
```