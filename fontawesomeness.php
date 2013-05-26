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
class plgSystemModernizer extends JPlugin {

// Some params
    var $pluginName = 'fontawesomeness';
    var $pluginRelativePath ='/plugins/system/fontawesomeness/';
    var $pluginNameHumanReadable = 'Modernizer Plugin';
    var $_firstInvocation = true;

//	TODO check if we need function onAfterRoute()  to accommodate JA T3 framework
    function onBeforeRender() {
        if ($this->_firstInvocation) { //avoid double execution
            $app = JFactory::getApplication();
           // if (!$app->isAdmin()) { also in admin to get editor previews!
                // $cookiepath = $app->getCfg('cookie_path',JURI::root(true));
                $this->_firstInvocation = false;
                $doc = JFactory::getDocument();
                
                if ($doc->getType() == 'html') { //run only in html pages
                    $options=$this->_getOpts();
                    if ($options["fontawesome"]){
                        $doc->addStylesheet(JURI::root(true).'/media/fontawesomeness/fontawesome/font-awesome.min.css?v=3.1.1');
                    }
                    if ($options["icomoon"]){
                        $doc->addStylesheet(JURI::root(true).'/media/fontawesomeness/icomoon/style.css?v=450');
            
                    }
                   
                }
            //} uncomment to not load in admin
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
            "fontawesome" => $this->params->get('fontawesome', "yes") == "yes",
            "icomoon" => $this->params->get('icomoon', "no") =="yes"
        );
    }

}

// END CLASS



