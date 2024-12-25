/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
const __VLS_props = defineProps();
const __VLS_emit = defineEmits(); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-2 gap-3") },
    });
    for (const [line] of __VLS_getVForSourceType((__VLS_ctx.lines))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    __VLS_ctx.$emit('select', line.id);
                } },
            key: ((line.id)),
            ...{ class: ("card flex items-center gap-3 transition-all") },
            ...{ class: (({
                    'ring-2 ring-offset-2': __VLS_ctx.modelValue === line.id,
                    [`ring-metro-${line.id}`]: __VLS_ctx.modelValue === line.id
                })) },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("w-3 h-3 rounded-full") },
            ...{ style: (({ backgroundColor: line.color })) },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("font-medium") },
        });
        (line.name);
    }
    ['grid', 'grid-cols-2', 'gap-3', 'card', 'flex', 'items-center', 'gap-3', 'transition-all', 'ring-2', 'ring-offset-2', 'w-3', 'h-3', 'rounded-full', 'font-medium',];
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
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=LineSelector.vue.js.map