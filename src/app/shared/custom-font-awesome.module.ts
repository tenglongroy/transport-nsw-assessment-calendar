import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBell, faTimesCircle, faClock, faCalendar, faCheckCircle, faFileAlt as farFileAlt, faChartBar, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faGoogle, faFacebook, faFacebookF, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import {
    faSearch,
    faUsers,
    faUserTie,
    faWifi,
    faExternalLinkAlt,
    faTrash,
    faPencilAlt,
    faEye,
    faChevronUp,
    faChevronLeft,
    faChevronRight,
    faSortDown,
    faAngleRight,
    faCaretDown,
    faBars,
    faTimes,
    faPlus,
    faEllipsisV,
    faEnvelope,
    faEnvelopeOpenText,
    faPhoneAlt,
    faCoffee,
    faSave,
    faSync,
    faFileExport,
    faFileAlt,
    faFile,
    faSortAlphaUpAlt,
    faUserFriends,
    faHome,
    faLightbulb,
    faCoins,
    faSortAmountUpAlt,
    faClipboard,
    faEdit,
    faCheck,
    faInfoCircle,
    faTheaterMasks,
    faUmbrella,
    faHandHoldingUsd,
    faCamera,
    faHourglassHalf,
    faArrowLeft,
    faDownload,
    faPaperclip,
    faShare
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
    imports: [
        FontAwesomeModule,
    ],
    exports: [
        FontAwesomeModule,
    ],
    declarations: [

    ],
    entryComponents: [],
    providers: [

    ]
})
export class CustomFontAwesomeModule {
    constructor(library: FaIconLibrary) {
        // Add an icon to the library for convenient access in other components
        library.addIcons(   // regular
                            faBell,
                            faTimesCircle,
                            faClock,
                            faCalendar,
                            faCheckCircle,
                            farFileAlt,
                            faChartBar,
                            faPaperPlane,
                            // brand
                            faMicrosoft,
                            faFacebook,
                            faFacebookF,
                            faGoogle,
                            // solid
                            faSearch,
                            faUsers,
                            faUserTie,
                            faWifi,
                            faExternalLinkAlt,
                            faTrash,
                            faPencilAlt,
                            faEye,
                            faChevronUp,
                            faChevronLeft,
                            faChevronRight,
                            faSortDown,
                            faAngleRight,
                            faCaretDown,
                            faBars,
                            faTimes,
                            faPlus,
                            faEllipsisV,
                            faEnvelope,
                            faEnvelopeOpenText,
                            faPhoneAlt,
                            faCoffee,
                            faSave,
                            faSync,
                            faFileExport,
                            faFileAlt,
                            faFile,
                            faSortAlphaUpAlt,
                            faUserFriends,
                            faHome,
                            faLightbulb,
                            faCoins,
                            faSortAmountUpAlt,
                            faClipboard,
                            faEdit,
                            faCheck,
                            faInfoCircle,
                            faTheaterMasks,
                            faUmbrella,
                            faHandHoldingUsd,
                            faCamera,
                            faHourglassHalf,
                            faArrowLeft,
                            faDownload,
                            faPaperclip,
                            faShare);
    }
}
