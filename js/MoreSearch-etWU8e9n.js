import{u as n,S as l,_ as h}from"./common-DEUdrn5X.js";import{o as d}from"./other-BBcxIW13.js";import"./vendor-pJLCUmA4.js";const i={id:"MoreSearch"},V={class:"content"},p=Vue.defineComponent({name:"MoreSearch",__name:"MoreSearch",setup(m){const c=n(),a=VueRouter.useRouter(),u=VueRouter.useRoute(),e=Vue.reactive({searchKey:""}),s=Vue.computed(()=>c.friends.all.filter(o=>o.name.search(e.searchKey)!==-1||o.account.search(e.searchKey)!==-1));return Vue.onMounted(()=>{e.searchKey=String(u.query.key)}),(o,t)=>(Vue.openBlock(),Vue.createElementBlock("div",i,[Vue.createElementVNode("div",V,[Vue.createVNode(l,{modelValue:e.searchKey,"onUpdate:modelValue":t[0]||(t[0]=r=>e.searchKey=r),"right-text":"取消","right-text-color":"white",onNotice:Vue.unref(a).back,isShowRightText:!0},null,8,["modelValue","onNotice"]),(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(s.value,r=>(Vue.openBlock(),Vue.createBlock(d,{key:r.id,mode:"search",searchKey:e.searchKey,people:r},null,8,["searchKey","people"]))),128))])]))}}),k=h(p,[["__scopeId","data-v-676a0f09"]]);export{k as default};
