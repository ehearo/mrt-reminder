/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { fetchStationTimetable, getAvailableLines, getNextTrains } from '@/services/stationService';
import MetroHeader from '@/components/MetroHeader.vue';
import MetroNav from '@/components/MetroNav.vue';
import LineSelector from '@/components/LineSelector.vue';
import StationCard from '@/components/StationCard.vue';
const selectedLine = ref('');
const stationList = ref([]);
const searchQuery = ref('');
const lines = getAvailableLines();
// 過濾後的站點列表
const filteredStations = computed(() => {
    const query = searchQuery.value.toLowerCase().trim();
    if (!query)
        return stationList.value;
    return stationList.value.filter(station => station.StationName.toLowerCase().includes(query) ||
        station.StationCode.toLowerCase().includes(query));
});
// 獲取當前路線顏色
const getCurrentLineColor = computed(() => {
    const line = lines.find(l => l.id === selectedLine.value);
    return line?.color || '#000000';
});
// 處理路線選擇
async function handleLineSelect(line) {
    selectedLine.value = line;
    stationList.value = await fetchStationTimetable(line);
    searchQuery.value = ''; // 清空搜尋
}
// 處理收藏切換
function toggleFavorite(stationCode) {
    // TODO: 實現收藏功能
    console.log('Toggle favorite:', stationCode);
}
// 自動更新計時器
let timer;
onMounted(() => {
    timer = window.setInterval(() => {
        if (stationList.value.length > 0) {
            stationList.value = [...stationList.value];
        }
    }, 30000);
});
onUnmounted(() => {
    if (timer) {
        window.clearInterval(timer);
    }
}); /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mb-6 relative") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
        value: ((__VLS_ctx.searchQuery)),
        type: ("text"),
        placeholder: ("搜尋站點或路線"),
        ...{ class: ("input pl-10") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
        ...{ class: ("fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400") },
    });
    if (__VLS_ctx.searchQuery) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.searchQuery)))
                        return;
                    __VLS_ctx.searchQuery = '';
                } },
            ...{ class: ("absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
            ...{ class: ("fas fa-times") },
        });
    }
    if (!__VLS_ctx.searchQuery) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("mb-6") },
        });
        // @ts-ignore
        /** @type { [typeof LineSelector, ] } */ ;
        // @ts-ignore
        const __VLS_5 = __VLS_asFunctionalComponent(LineSelector, new LineSelector({
            ...{ 'onSelect': {} },
            lines: ((__VLS_ctx.lines)),
            modelValue: ((__VLS_ctx.selectedLine)),
        }));
        const __VLS_6 = __VLS_5({
            ...{ 'onSelect': {} },
            lines: ((__VLS_ctx.lines)),
            modelValue: ((__VLS_ctx.selectedLine)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_5));
        let __VLS_10;
        const __VLS_11 = {
            onSelect: (__VLS_ctx.handleLineSelect)
        };
        let __VLS_7;
        let __VLS_8;
        var __VLS_9;
    }
    if (__VLS_ctx.selectedLine) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("space-y-3") },
        });
        for (const [station] of __VLS_getVForSourceType((__VLS_ctx.filteredStations))) {
            // @ts-ignore
            /** @type { [typeof StationCard, ] } */ ;
            // @ts-ignore
            const __VLS_12 = __VLS_asFunctionalComponent(StationCard, new StationCard({
                ...{ 'onToggleFavorite': {} },
                key: ((station.StationCode)),
                station: ((station)),
                lineColor: ((__VLS_ctx.getCurrentLineColor)),
                nextTrains: ((__VLS_ctx.getNextTrains(station.StationCode))),
            }));
            const __VLS_13 = __VLS_12({
                ...{ 'onToggleFavorite': {} },
                key: ((station.StationCode)),
                station: ((station)),
                lineColor: ((__VLS_ctx.getCurrentLineColor)),
                nextTrains: ((__VLS_ctx.getNextTrains(station.StationCode))),
            }, ...__VLS_functionalComponentArgsRest(__VLS_12));
            let __VLS_17;
            const __VLS_18 = {
                onToggleFavorite: (...[$event]) => {
                    if (!((__VLS_ctx.selectedLine)))
                        return;
                    __VLS_ctx.toggleFavorite(station.StationCode);
                }
            };
            let __VLS_14;
            let __VLS_15;
            var __VLS_16;
        }
    }
    else if (__VLS_ctx.searchQuery && !__VLS_ctx.filteredStations.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-center py-12") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
            ...{ class: ("fas fa-search text-2xl text-gray-400") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("text-gray-500") },
        });
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-center py-12") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
            ...{ class: ("fas fa-subway text-2xl text-gray-400") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("text-gray-500") },
        });
    }
    // @ts-ignore
    /** @type { [typeof MetroNav, ] } */ ;
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(MetroNav, new MetroNav({}));
    const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ['page-container', 'safe-area', 'page-content', 'mb-6', 'relative', 'input', 'pl-10', 'fas', 'fa-search', 'absolute', 'left-4', 'top-1/2', '-translate-y-1/2', 'text-gray-400', 'absolute', 'right-4', 'top-1/2', '-translate-y-1/2', 'text-gray-400', 'hover:text-gray-600', 'fas', 'fa-times', 'mb-6', 'space-y-3', 'text-center', 'py-12', 'bg-white', 'rounded-full', 'w-16', 'h-16', 'mx-auto', 'mb-4', 'flex', 'items-center', 'justify-center', 'fas', 'fa-search', 'text-2xl', 'text-gray-400', 'text-gray-500', 'text-center', 'py-12', 'bg-white', 'rounded-full', 'w-16', 'h-16', 'mx-auto', 'mb-4', 'flex', 'items-center', 'justify-center', 'fas', 'fa-subway', 'text-2xl', 'text-gray-400', 'text-gray-500',];
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
            LineSelector: LineSelector,
            StationCard: StationCard,
            selectedLine: selectedLine,
            searchQuery: searchQuery,
            lines: lines,
            filteredStations: filteredStations,
            getCurrentLineColor: getCurrentLineColor,
            handleLineSelect: handleLineSelect,
            toggleFavorite: toggleFavorite,
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
//# sourceMappingURL=HomeView.vue.js.map