class Layout {
  convert(elements) {
    var s = "\n";
    elements.map(function(v) {
      var elementName = sanitizeName(v.name);
      // Top
      s += `        addConstraint(
            NSLayoutConstraint(item: ${elementName},
                               attribute: .top,
                               relatedBy: .equal,
                               toItem: self,
                               attribute: .top,
                               multiplier: 1,
                               constant: ${v.frame.y})
          )

  `;

      // Left
      s += `        addConstraint(
            NSLayoutConstraint(item: ${elementName},
                               attribute: .left,
                               relatedBy: .equal,
                               toItem: self,
                               attribute: .left,
                               multiplier: 1,
                               constant: ${v.frame.x})
          )

  `;

      // Width
      s += `        addConstraint(
            NSLayoutConstraint(item: ${elementName},
                               attribute: .width,
                               relatedBy: .equal,
                               toItem: nil,
                               attribute: .notAnAttribute,
                               multiplier: 1,
                               constant: ${v.frame.width})
          )

  `;

      // Height
      s += `        addConstraint(
            NSLayoutConstraint(item: ${elementName},
                               attribute: .height,
                               relatedBy: .equal,
                               toItem: nil,
                               attribute: .notAnAttribute,
                               multiplier: 1,
                               constant: ${v.frame.height})
          )

  `;
    });
    return s;
  }
}
