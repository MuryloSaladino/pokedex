import { klass } from '@/helpers';
import { ComponentPropsWithoutRef, forwardRef, memo } from 'react';

const Icon = memo(
    forwardRef<HTMLSpanElement, ComponentPropsWithoutRef<'span'>>(
        ({ className, children, ...props }, ref) => (
            <span ref={ref} className={klass('material-symbols-sharp', className)} {...props}>
                {children}
            </span>
        )
    )
);

export default Icon;
