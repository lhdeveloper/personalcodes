# personalcodes
Códigos de uso em projetos.

## $pnp setup vue
Utilizar este código no começo dos js feitos com vue:
```
$pnp.setup({
	headers:{
		"Accept": "application/json; odata=verbose"
	}
})
```

## Anchor Scrolling - para um local específico da página.
Utilizar este código caso precise inserir uma ancora no banner que arrastará para uma sessão específica da página.
OBS: lembrar de modificar o seletor do animate caso não seja intranet e remover o "top-80", que é inserido por conta da Ribbon.
```
scrollDown: function(){
    $('#s4-workspace').animate({
        scrollTop: $("#FinUpdates").offset().top-80}
    ,'slow');
}
```

## Current Image - função para split em endereço de imagem (lists)
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