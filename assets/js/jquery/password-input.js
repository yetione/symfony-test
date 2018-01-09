define('jquery/password-input', ['jquery'], function($){
    return $.fn.passwordInput = function(args){
        const STATE_OPEN = 'open';
        const STATE_CLOSE = 'close';
        const POSITION_LEFT = 'left';
        const POSITION_RIGHT = 'right';
        const EVENT_STATE_CHANGED = 'stateChanged';
        const DATA_STATE_PROPERTY = 'state';
        var self = this;
        var defaultOptions = {
            eyePosition:POSITION_RIGHT,
            openEyeIcon: 'fa-eye',
            closeEyeIcon: 'fa-eye-slash',
            wrapperClass: 'password-input-btn input-group-addon',
            inputClass: 'password-input-field',
            buttonTextSelector: 'input-group-text'
        };
        self.options = {};


        var templates = {
            group:'<div class="input-group mb-2 mb-sm-0"></div>',
            icon: '<i class="fa"></i>',
            button:'<div class=""><div class="input-group-text"></div></div>'
        };

        self.init = function(options){
            self.options = $.extend(defaultOptions, options);

            self.each(function(){
                var $this = $(this), $parent = $this.parent();
                $this.addClass(self.options.inputClass);
                var $group = $(templates.group),
                    $closeIcon = $(templates.icon),
                    $openIcon = $(templates.icon),
                    $button = $(templates.button),
                    $buttonContent = $button.find('.'+self.options.buttonTextSelector);
                $closeIcon.addClass(self.options.closeEyeIcon).appendTo($buttonContent);
                $openIcon.addClass(self.options.openEyeIcon).appendTo($buttonContent);

                $button.addClass(self.options.wrapperClass).addClass('input-group-' +
                    (self.options.eyePosition === POSITION_LEFT ? 'prepend' : 'append')
                );
                if (self.options.eyePosition === POSITION_LEFT){
                    $group.append($button).append($this);
                }else if (self.options.eyePosition === POSITION_RIGHT){
                    $group.append($this).append($button);
                }else {
                    $.error('Password input: Unknown position '+self.options.eyePosition);
                    return false;
                }
                $this.on(EVENT_STATE_CHANGED+'.password-input', {element:$this}, self.onStateChange);
                $this.data(DATA_STATE_PROPERTY, STATE_OPEN).trigger(EVENT_STATE_CHANGED);
                $button.on('click', {element:$this}, self.onButtonClick);
                $group.appendTo($parent);
            });
        };

        self.onButtonClick = function (event) {
            var $input = event.data.element, state = $input.data(DATA_STATE_PROPERTY);
            $input.data(DATA_STATE_PROPERTY, state === STATE_OPEN ? STATE_CLOSE : STATE_OPEN).trigger(EVENT_STATE_CHANGED);
        };

        self.onStateChange = function(event) {
            var $input = event.data.element, state = $input.data(DATA_STATE_PROPERTY),
                $closeIcon = $input.parent().find('.'+self.options.closeEyeIcon),
                $openIcon = $input.parent().find('.'+self.options.openEyeIcon);
            if (state === STATE_OPEN){
                $closeIcon.hide();
                $openIcon.show();
                $input.attr('type', 'password')
            }else if (state === STATE_CLOSE){
                $openIcon.hide();
                $closeIcon.show();
                $input.attr('type', 'text')
            } else {
                $.error('Unknown state '+state);
            }
        };

        if ( typeof args === 'object' || ! args ) {
            return self.init.apply( this, arguments );
        } else {
            $.error( 'Password input: Unsupported call ' +  args );
        }
    }

});