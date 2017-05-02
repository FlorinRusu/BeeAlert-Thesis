/**
 * Created by Florin on 4/26/2017.
 */
jQuery(function ($) {
    var values = [ 4.2, 3.5, 4.4, 4.7, 3.8 ];
    /*             5Jan 6Jan 8feb 7mar 10apr                                      */
    $("#chart1").shieldChart({
        exportOptions: {
            image: false,
            print: false
        },

        primaryHeader: {
            text: 'Seisme Romania > 3.5 grade Richter',
            align: 'center'
        },

        axisX: {
            min:0,
            axisTickText: {
                step: 1
            },
            categoricalValues:['5 Ian','19 Jan','8 Feb','7 Mar','10 Apr']
        },

        height: 330,
        axisY: {
            min:0,
            axisTickText: {
                step: 1
            },
            title: {
                text: "Grade pe scara Richter"
            }
        },
        dataSeries: [

            {
                color:"#fec20e",
                seriesType: "line",
                axisY:0,
                collectionAlias: "Seisme ",
                data: values
            }
/*
            {
                seriesType:"line",
                axisY: 1,
                collectionAlias: "",
                data: [6, 14, 24, 38, 54, 75, 96]
            }*/
        ]


    });
});