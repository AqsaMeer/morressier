const eventPage = function () {
  this.logo = "[alt='Morressier Logo']";
  this.icon = "[alt='Morressier Icon']";
  this.gotItButton = "[data-test-id='COOKIE_BANNER']";
  this.links = ".jROQLS div p a";
  this.searchField = "input[placeholder='Search']";
  this.searchIcon = ".sc-jrQzUz";
  this.totalSubmissions = ".jROQLS div p";
  this.paperName = "[data-card-name='CardContent'] a";
  this.pagination = ".style__PageNumbers-n0rl9d-1 a";

  //Filter
  this.filterButton = ".style__FilterToggleButton-sc-1x1tqvy-6";
  this.filtersList = "body .MuiPaper-root .MuiPaper-root";
  this.filterRightPanel = "body .MuiDrawer-paperAnchorRight";
  this.closeFilterPanel = "body .MuiDrawer-paperAnchorRight button";
  this.keywordCheckbox =
    "body .MuiExpansionPanelDetails-root .MuiListItem-button";
  this.keywordSubmissionCount =
    "body .MuiExpansionPanelDetails-root .MuiListItem-button span";
  this.filtersSelectedCount = "body .MuiExpansionPanelSummary-content div h4";
  this.selectedFilter = "body .MuiChip-deletable";
  this.submissionDetails = ".ebmKZM .kJiLCV";
  this.searchKeywordField = "[name='filter-Keywords']";
  this.searchedKeywordResult =
    "body .MuiExpansionPanelDetails-root .MuiListItem-button .jQMCFC";
};

module.exports = eventPage;
