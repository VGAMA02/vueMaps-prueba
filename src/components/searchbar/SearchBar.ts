import { defineComponent, ref, computed } from 'vue';
import SearchResults from '@/components/search-results/SearchResults.vue';
import { usePlacesStore } from '@/composables';
export default defineComponent({
name:'SearchBar',
components:{ SearchResults },
setup(){

    const debouncedTimeout = ref()
    const debouncedValued = ref('hola')
    const { searchPlacesByTerm } = usePlacesStore()
    return{
        debouncedValued,
        searchTerm: computed({
            get(){
                return debouncedValued.value
            },
            set(val:string){
                if(debouncedTimeout.value) clearTimeout(debouncedTimeout.value)
                debouncedTimeout.value = setTimeout(() => {
                    searchPlacesByTerm(val)
                },1000)
                
            }
        }),
        


    }
}
})