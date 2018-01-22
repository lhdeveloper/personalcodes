# personalcodes
Códigos de uso em projetos.

## Anchor Scrolling - para um local específico da página.
Utilizar este código caso precise inserir uma ancora no banner que arrastará para uma sessão específica da página.
OBS: lembrar de modificar o seletor do animate caso não seja intranet e remover o "top-80", que é inserido por conta da Ribbon.
```
scrollDown: function(){
    $('#s4-workspace').animate({
        scrollTop: $("#FinUpdates").offset().top-80},'slow');
}
```