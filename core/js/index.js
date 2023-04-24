import $ from 'jquery';

import './styleguide-code-samples';
import './styleguide-typography';
import './styleguide-search';
import rememberScroll from './styleguide-remember-scroll';

window.$ = $;

rememberScroll('.br-styleguide-content');
rememberScroll('.br-styleguide-navigation-holder');
