import sys
import sklearn
import numpy as np
import pickle
import warnings

warnings.filterwarnings("ignore")


# there are four inputs

# order of input: AGECAT AGEMEN AGEFLB NUMREL


X = sys.argv[1:]

X = np.array(X, dtype=np.float)

X = X.reshape(1, -1)

model = pickle.load(open('components/model/riskmodel(Depricated!).sav', 'rb'))

y = model.predict_proba(X)

y = y[0][1]

y = 100*y

y = round(y, 2)

print(y)
