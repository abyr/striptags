(function () {

    var root;

    root = {};

    root.tagsRegExp = /<\/?([a-z][a-z0-9]*)\b[^>]*>/g;

    root.attrsRegExp = /<(\/?[a-z][a-z0-9]*)([^>]*)>/g;

    root.tagRegExp = function (v) {
        return RegExp("</?" + (v || "") + "[^<>]*>", "gi");
    };

    root.stripTags = function (s, tags, allowed) {
        var i, tag;
        if (typeof tags === "undefined") {
            s = root.strip(s);
        } else if (allowed && !tags) {
            s = root.stripAllTags(s, allowed);
        } else {
            tags = root.arrayArg(tags);
            allowed = root.arrayArg(allowed);
            if (tags.length && tags[0]) {
                i = tags.length;
                while (i > 0) {
                    --i;
                    tag = tags[i];
                    if (allowed.length && allowed.indexOf(tag) === -1) {
                        s = s.replace(root.tagRegExp(tag), "");
                    }
                }
            } else {
                s = root.strip(s);
            }
        }
        s = root.stripAllAttribures(s);
        return s;
    };

    root.arrayArg = function (v) {
        v = v || "";
        if (typeof v === "string") {
            v = v.split(",");
        } else if (toString.call(v) !== "[object Array]") {
            v = [v];
        }
        return v;
    };

    root.strip = function (s, tags) {
        s = s.replace(root.tagRegExp(tags), "");
        return s;
    };

    root.stripAllTags = function (s, allowed) {
        allowed = root.arrayArg(allowed).join("");
        s = s.replace(root.tagsRegExp, function ($0, $1) {
            if (allowed.indexOf($1.toLowerCase()) !== -1) {
                return $0;
            } else {
                return "";
            }
        });
        return s;
    };

    root.stripAllAttribures = function (s) {
        s = s.replace(root.attrsRegExp, "<$1>");
        return s;
    };

    return module.exports = root.stripTags;

}).call(this);
