/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { computed } from 'vue';
import { useFavoriteStore } from '@/stores/favorite';
import { getNextTrains, getLineFromStationCode } from '@/services/stationService';
import MetroHeader from '@/components/MetroHeader.vue';
import MetroNav from '@/components/MetroNav.vue';
import StationCard from '@/components/StationCard.vue';
const favoriteStore = useFavoriteStore();
const favoriteStations = computed(() => favoriteStore.getFavoriteStations);
const lineColors = {
    'red': '#E3002C',
    'blue': '#0070BD',
    'green': '#008659',
    'orange': '#F8B61C',
    '': '#000000'
};
function getLineColor(stationCode) {
    const line = getLineFromStationCode(stationCode);
    return lineColors[line];
}
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("page-container safe-area") },
    });
    // @ts-ignore
    /** @type { [typeof MetroHeader, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(MetroHeader, new MetroHeader({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
        ...{ class: ("page-content") },
    });
    if (__VLS_ctx.favoriteStations.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("space-y-3") },
        });
        for (const [station] of __VLS_getVForSourceType((__VLS_ctx.favoriteStations))) {
            // @ts-ignore
            /** @type { [typeof StationCard, ] } */ ;
            // @ts-ignore
            const __VLS_5 = __VLS_asFunctionalComponent(StationCard, new StationCard({
                key: ((station.StationCode)),
                station: ((station)),
                lineColor: ((__VLS_ctx.getLineColor(station.StationCode))),
                nextTrains: ((__VLS_ctx.getNextTrains(station.StationCode))),
            }));
            const __VLS_6 = __VLS_5({
                key: ((station.StationCode)),
                station: ((station)),
                lineColor: ((__VLS_ctx.getLineColor(station.StationCode))),
                nextTrains: ((__VLS_ctx.getNextTrains(station.StationCode))),
            }, ...__VLS_functionalComponentArgsRest(__VLS_5));
        }
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-center py-12") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
            ...{ class: ("fas fa-star text-2xl text-gray-400") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("text-gray-500") },
        });
    }
    // @ts-ignore
    /** @type { [typeof MetroNav, ] } */ ;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(MetroNav, new MetroNav({}));
    const __VLS_11 = __VLS_10({}, ...__VLS_functionalComponentArgsRest(__VLS_10));
    ['page-container', 'safe-area', 'page-content', 'space-y-3', 'text-center', 'py-12', 'bg-white', 'rounded-full', 'w-16', 'h-16', 'mx-auto', 'mb-4', 'flex', 'items-center', 'justify-center', 'fas', 'fa-star', 'text-2xl', 'text-gray-400', 'text-gray-500',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            getNextTrains: getNextTrains,
            MetroHeader: MetroHeader,
            MetroNav: MetroNav,
            StationCard: StationCard,
            favoriteStations: favoriteStations,
            getLineColor: getLineColor,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=FavoritesView.vue.js.map