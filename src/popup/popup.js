'use strict';

angular.module('angularify.semantic.popup', [])

.directive('popup', function ($document) {
    return {
        restrict: "A",
        scope : {
            popup : "@"
        },
        link: function(scope, element, attrs) {
            var class_name = '';
            // convert to json
            var popup_meta_data = eval('(' + scope.popup + ')');
            
            var title = popup_meta_data['title'];
            if (title == undefined)
                title = '';
            
            var content = popup_meta_data['content'];
            if (content == undefined)
                content = '';
            
            var position = popup_meta_data['position'];
            if (position == undefined)
                position = 'top';

            var size = popup_meta_data['size'];
            if (size == undefined)
                size = 'small';
            
            if (position == 'left') {
                class_name = 'ui popup left center transition visible ' + size;
            } else if (position == 'right') {
                class_name = 'ui popup right center transition visible ' + size;
            } else if (position == 'bottom') {
                class_name = 'ui popup bottom center transition visible ' + size;
            } else {
                class_name = 'ui popup top center transition visible ' + size;
            }

            //
            // Get element X/Y of left corner
            //
            function getPos(ele){
                    var x = 0;
                    var y = 0;
                    while(true){
                        x += ele.offsetLeft;
                        y += ele.offsetTop;
                        if(ele.offsetParent === null)
                            break;
                        ele = ele.offsetParent;
                    }
                    return [x, y];
            }

            var current_element_position_top_left = getPos(element[0]);
            var current_element_height = element[0].offsetHeight;
            var current_element_width  = element[0].offsetWidth;

            //
            // Remove element by class name
            //
            NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
                for(var i = 0, len = this.length; i < len; i++) {
                    if(this[i] && this[i].parentElement) {
                        this[i].parentElement.removeChild(this[i]);
                    }
                }
            }

            //
            // Handle mouse over
            //
            element.bind('mouseenter', function(){
                var html = '<div id="my-popup" class="' + class_name + '" style=""><div class="header">' + title +'</div><div class="content">' + content + '</div></div>';

                angular.element(element[0]).append(html);

                var popupHeight = document.getElementById('my-popup').clientHeight;
                var popupWidth  = document.getElementById('my-popup').clientWidth;

                if (position == 'left') {
                    document.getElementById('my-popup').style.top = current_element_position_top_left[1] + (current_element_height / 2) - (popupHeight / 2) + 'px';
                    document.getElementById('my-popup').style.right = 'auto';
                    document.getElementById('my-popup').style.left = current_element_position_top_left[0] - popupWidth - 10 + 'px';
                    document.getElementById('my-popup').style.bottom = 'auto';
                    document.getElementById('my-popup').style.display = 'inline-block';
                } else if (position == 'right') {
                    document.getElementById('my-popup').style.top = current_element_position_top_left[1] + (current_element_height /  2) - (popupHeight / 2) + 'px';
                    document.getElementById('my-popup').style.right = 'auto';
                    document.getElementById('my-popup').style.left = current_element_position_top_left[0] + current_element_width + 'px';
                    document.getElementById('my-popup').style.bottom = 'auto';
                    document.getElementById('my-popup').style.display = 'inline-block';
                } else if (position == 'bottom') {
                    document.getElementById('my-popup').style.top = current_element_position_top_left[1] + current_element_height + 'px';
                    document.getElementById('my-popup').style.left = current_element_position_top_left[0] + (current_element_width / 2) - (popupWidth / 2) + 15 + 'px';
                    document.getElementById('my-popup').style.right = 'auto';
                    document.getElementById('my-popup').style.bottom = 'auto';
                    document.getElementById('my-popup').style.display = 'inline-block';
                } else {
                    document.getElementById('my-popup').style.top = current_element_position_top_left[1] - popupHeight - 10 + 'px';
                    document.getElementById('my-popup').style.left = current_element_position_top_left[0] + (current_element_width / 2) - (popupWidth / 2) + 18 + 'px';
                    document.getElementById('my-popup').style.right = 'auto';
                    document.getElementById('my-popup').style.bottom = 'auto';
                    document.getElementById('my-popup').style.display = 'inline-block';
                }
            });

            //
            // Handle mouse leave
            //
            element.bind('mouseleave', function(){
                document.getElementsByClassName("ui popup bottom center transition visible").remove();
                if (document.getElementById('my-popup') !== null)
                    document.getElementById('my-popup').remove();
            });
        }
    }
});