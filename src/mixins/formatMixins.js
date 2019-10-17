export const formattingfMixins = {
    filters: {
        reverse(value) {
            return value.split('').reverse().join('');
        }
    },
    created() {
        console.log('from Mixin');
    }
};

export const someOtherMixins = {

};