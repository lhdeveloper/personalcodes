$pnp.setup({
    sp: {
        headers: {
            "Accept": "application/json; odata=verbose"
        }
    }
});

Vue.component('component-id',{
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
            console.error('error - ' + msg + ' - ' + data);
        }
    },
    data: function() {
        var listName = 'ListName'
        return {
            listName: listName,
            listUrl: _spPageContextInfo.webServerRelativeUrl + '/lists/'+listName+'',
            list: []
        }
    }
})

var app = new Vue({
    el: '#component-id',
    template: '<component-id/>'
})