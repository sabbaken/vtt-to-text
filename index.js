const vttToPlainText = (vttCaption) => {
  if (vttCaption.length === 0) {
    return;
  }

  vttCaption = vttCaption.replace(/.+ --> .+/g, '');
  vttCaption = vttCaption.replace(/<\/c>/g, '');
  vttCaption = vttCaption.replace(/<.+?>/g, '');
  vttCaption = vttCaption.replace(/^\s*$/g, '');
  vttCaption = vttCaption.replace(/&nbsp;/g, ' ');

  let lines = vttCaption.split('\n');
  lines.splice(0, 4);
  lines = lines.map(line => line.trim());
  lines = lines.filter(line => line.length > 0);
  lines = lines.filter((line, index, lines) => line !== lines[index + 1]);

  return lines.join(' ');
}

module.exports = {vttToPlainText};