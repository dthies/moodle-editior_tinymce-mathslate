@editor @editor_tinymce @tinymce @tinymce_mathslate @_bug_phantomjs
Feature: TinyMCE mathslate editor
  To teach maths to students, I need to write TeX expressions

  @javascript
  Scenario: Create a mathematical expression
    When I select the text in the "Description" Atto editor
    And I click on "Mathslate" "button"
    And I click on "[title='Greek alphabet and symbols']" "css_element"
    And I click on "[title='\\infty']" "css_element"
    And I click on "Display TeX" "button"
    And I click on "Update profile" "button"
    And I follow "Profile" in the user menu
    Then "\infty" "text" should exist
