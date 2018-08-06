$pnp.setup({
    sp: {
        headers: {
            "Accept": "application/json; odata=verbose"
        }
    }
});

Vue.component('element',{
    template:`
        <element>
            <div v-for="item in list">
            </div>
        </element>
    `,
    created: function(){
        this.getData()
            .then(this.applyGetData, this.threatError.bind(this,'erro ao obter informações da lista '+this.listName+''))
            .then(this.applyEvents)
    },
    methods: {
        getData: function(){
            return $pnp.sp.web.getList(this.listUrl).items
                //.filter()
                .select('*')
                //.expand()
                //.orderBy('field',true)
                //.top()
                .get()
        },
        applyGetData: function(data){
            this.list = data;
        },
        applyEvents: function(){

        },
        threatError: function(msg,data){
            console.error('error - ' + msg);
        }
    },
    data: function() {
        return {
            listName: '',
            listUrl: _spPageContextInfo.webServerRelativeUrl + '/lists/'+this.listName+'',
            list: []
        }
    }
})

var app = new Vue({
    el: '#element',
    template: '<element/>'
})