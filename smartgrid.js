module.exports = {
    outputStyle: "less",
    columns: 12,
    offset: "32px",
    container: {
        maxWidth: "1120px",
        fields: "32px"
    },
    breakPoints: {

        xxl: {
            width: "1120px"
        },
        lg: {
            width: "1088px"
        },
        md: {
            width: "736px",
            // offset: "32px",
            fields: "32px"
        },
        sm: {
            width: "320px",
            fields: "16px"
        },
        // xs: {
        //     width: "576px",
        //     fields: "16px"
        // }
    },
    mobileFirst: true,
    defaultMediaDevice: "all",
 };