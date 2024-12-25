/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import MetroHeader from '@/components/MetroHeader.vue';
import MetroNav from '@/components/MetroNav.vue'; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("min-h-screen bg-gray-50 safe-area") },
    });
    // @ts-ignore
    /** @type { [typeof MetroHeader, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(MetroHeader, new MetroHeader({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
        ...{ class: ("metro-content") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-center py-12") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-gray-500") },
    });
    // @ts-ignore
    /** @type { [typeof MetroNav, ] } */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(MetroNav, new MetroNav({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    ['min-h-screen', 'bg-gray-50', 'safe-area', 'metro-content', 'text-center', 'py-12', 'text-gray-500',];
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
            MetroHeader: MetroHeader,
            MetroNav: MetroNav,
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
//# sourceMappingURL=MapView.vue.js.map