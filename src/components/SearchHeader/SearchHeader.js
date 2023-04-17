import { Tippy  as TippyHeadLess} from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';

function SearchHeader({ children }) {
    return <Tippy>{children}</Tippy>;
}

export default SearchHeader;
