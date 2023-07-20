export default function AutoUnsub() {
    return function(constructor) {
        const orig = constructor.prototype.ngOnDestroy;
        constructor.prototype.ngOnDestroy = function() {
            // tslint:disable-next-line: forin
            for(const prop in this) {
                const property = this[prop];
                if (typeof property.subscribe === 'function') {
                    property.unsubscribe();
                }
            }
            orig.apply();
        };
    };
}
