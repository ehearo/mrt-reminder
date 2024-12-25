/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { computed } from 'vue';
import { useFavoriteStore } from '@/stores/favorite';
const props = defineProps();
const favoriteStore = useFavoriteStore();
const isFavorite = computed(() => favoriteStore.isFavorite(props.station.StationCode));
function toggleFavorite() {
    favoriteStore.toggleFavorite(props.station);
}
const isArrivingSoon = computed(() => {
    return props.nextTrains[0]?.arrivalTime === '即將到站';
});
const nextTrainInfo = computed(() => {
    if (!props.nextTrains.length)
        return '目前無班次';
    const next = props.nextTrains[0];
    return `往${next.destination} - ${next.arrivalTime}`;
}); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("card p-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-between items-start") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex-1") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center gap-3 mb-2") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("w-2 h-2 rounded-full") },
        ...{ style: (({ backgroundColor: __VLS_ctx.lineColor })) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("font-medium") },
    });
    (__VLS_ctx.station.StationName);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center gap-2 text-sm") },
        ...{ class: (({ 'text-green-600': __VLS_ctx.isArrivingSoon })) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
        ...{ class: ("fas fa-train") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.nextTrainInfo);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.toggleFavorite) },
        ...{ class: ("p-2 transition-colors") },
        ...{ class: ((__VLS_ctx.isFavorite ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500')) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
        ...{ class: ("fas fa-star") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mt-3 pt-3 border-t border-gray-100") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-3 gap-4 text-sm text-gray-500") },
    });
    for (const [train] of __VLS_getVForSourceType((__VLS_ctx.nextTrains))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((train.Time)),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-xs") },
        });
        (train.Time);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("truncate") },
        });
        (train.destination);
    }
    ['card', 'p-4', 'flex', 'justify-between', 'items-start', 'flex-1', 'flex', 'items-center', 'gap-3', 'mb-2', 'w-2', 'h-2', 'rounded-full', 'font-medium', 'flex', 'items-center', 'gap-2', 'text-sm', 'text-green-600', 'fas', 'fa-train', 'p-2', 'transition-colors', 'fas', 'fa-star', 'mt-3', 'pt-3', 'border-t', 'border-gray-100', 'grid', 'grid-cols-3', 'gap-4', 'text-sm', 'text-gray-500', 'text-xs', 'truncate',];
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
            isFavorite: isFavorite,
            toggleFavorite: toggleFavorite,
            isArrivingSoon: isArrivingSoon,
            nextTrainInfo: nextTrainInfo,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=StationCard.vue.js.map