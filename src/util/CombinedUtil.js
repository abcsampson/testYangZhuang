import ConversionConstants from '../constants/ConversionConstants';
import LeeUtil from './LeeUtil';
import LiaoUtil from './LiaoUtil';

const { SCHEMES, Dialect } = ConversionConstants;
const Neutralizers = {
    [SCHEMES.LIAO]: LiaoUtil.neutralize,
    [SCHEMES.LEE]: LeeUtil.neutralize,
};
const Generators = {
    [SCHEMES.LEE]: LeeUtil.generate,
    [SCHEMES.LIAO_2010_DEBAO]: LiaoUtil.createGenerator({ version: 1, dialect: Dialect.DEBAO }),
    [SCHEMES.LIAO_2010_JINGXI]: LiaoUtil.createGenerator({ version: 1, dialect: Dialect.JINGXI }),
    [SCHEMES.LIAO_2013]: LiaoUtil.createGenerator({ version: 2 }),
    [SCHEMES.LIAO_3]: LiaoUtil.createGenerator({ version: 3 }),
};

function convert(from, to, value) {
    const neutralize = Neutralizers[from];
    const generate = Generators[to];

    return generate(neutralize(value));
}

export default {
  convert,
};
