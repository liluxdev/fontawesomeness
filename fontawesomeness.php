<?php

/**
 * @version		2.1
 * @package		Example K2 Plugin (K2 plugin)
 * @author    JoomlaWorks - http://www.joomlaworks.gr
 * @copyright	Copyright (c) 2006 - 2012 JoomlaWorks Ltd. All rights reserved.
 * @license		GNU/GPL license: http://www.gnu.org/copyleft/gpl.html
 */
// no direct access
defined('_JEXEC') or die('Restricted access');

jimport('joomla.filesystem.file');
jimport('joomla.html.parameter');
jimport('joomla.plugin.plugin');

// Initiate class to hold plugin events
class plgSystemFontawesomeness extends JPlugin {

// Some params
    var $pluginName = 'fontawesomeness';
    var $pluginRelativePath ='/plugins/system/fontawesomeness/';
    var $pluginNameHumanReadable = 'Modernizer Plugin';
    var $_firstInvocation = true;

    public function __construct(&$subject, $config = array()) {
        parent::__construct($subject, $config);
        
    }
    
//	TODO check if we need function onAfterRoute()  to accommodate JA T3 framework
    function onBeforeRender() {
        if ($this->_firstInvocation) { //avoid double execution
            $app = JFactory::getApplication();
            $options=$this->_getOpts();
            if (!$app->isAdmin() || $options["inadmin"] ) { //also in admin to get editor previews!
              
                $this->_firstInvocation = false;
                $doc = JFactory::getDocument();
                if ($doc->getType() == 'html') { //run only in html pages
                    if ($options["yootheme"]){
                        $doc->addStylesheet(JURI::root(true).'/media/fontawesomeness/overrides/yootheme.css?v=0.6');
                    }
                    if ($options["fontawesome"]){
                        $doc->addStylesheet(JURI::root(true).'/media/fontawesomeness/assets/font-awesome/css/font-awesome.min.css?v=3.1.1');
                    }
                    if ($options["icomoon"]){
                        $doc->addStylesheet(JURI::root(true).'/media/fontawesomeness/assets/icomoon/style.css?v=450');
            
                    }
                   
                }
            } 
        }
        return true;
    }

    private function _getLang() {
        $strings = array(
            'SITELABEL_'.strtoupper($this->params->get('sitekind', "site"))
        );
        $output = array();
        foreach ($strings as $string)
            JText::script('PLG_SYS_MODERNIZER_' . $string);
//            foreach ($strings as $string) {
//                $fullstring='PLG_SYS_BROWSERUPDATEWARNING_JS_'.$string;
//                $output[$string]=JText::_($fullstring);
//            }
        return $output;
    }

    private function _getOpts() {
        return array(
            "fontawesome" => $this->params->get('fontawesome', "no") == "yes",
            "icomoon" => $this->params->get('icomoon', "yes") =="yes",
            "inadmin" => $this->params->get('inadmin', "yes") =="yes",
            "yooyheme" => $this->params->get('yootheme', "yes") =="yes"
        );
    }

}

// END CLASS



