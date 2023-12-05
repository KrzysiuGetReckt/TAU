const BaseForm = require('../../../framework/baseForm');
const Element = require('../../../framework/element');
const timeouts = require('../../../environment/timeouts');

class HoverPage extends BaseForm {
  constructor() {
    super(`.example h3`, 'Hover page of Hover Page');
  }

  get title() {
    return new Element(`.example h3`, 'Hover page of  the-internet.herokuapp');
  }

  figureImg = (index) => {
    return new Element(
      `.example .figure:nth-child(${index}) img`,
      `Figure image of index ${index} of Hover Page`
    );
  };

  figcaption = (index) => {
    return new Element(
      `div.figure:nth-child(${index}) > div.figcaption`,
      `Figcaption of index ${index} of Hover Page`
    );
  };

  figcaptionTitle = (index) => {
    return new Element(
      `div.figure:nth-child(${index}) > div.figcaption > h5`,
      `Figcaption text of index ${index} of Hover Page`
    );
  };

  async titleText() {
    return this.title.getText();
  }

  async hoverFigureImg(index, xOffset, yOffset) {
    return this.figureImg(index).moveTo(xOffset, yOffset);
  }

  async checkFigcaptionDisplayed(index, reverse = false) {
    return this.figcaption(index)
      .state()
      .assertIsDisplayed(timeouts.explicit, timeouts.polling, reverse);
  }

  async figcaptionText(index) {
    return this.figcaptionTitle(index).getText();
  }
}

module.exports = new HoverPage();
