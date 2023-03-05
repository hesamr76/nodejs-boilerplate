import numpy as np
import sys


# order of input: AGECAT NBIOPS AGEMEN AGEFLB NUMREL
[AGECAT, NBIOPS, AGEMEN, AGEFLB, NUMREL] = sys.argv[1:]

AGECAT = int(AGECAT)
NBIOPS = int(NBIOPS)
AGEMEN = int(AGEMEN)
AGEFLB = int(AGEFLB)
NUMREL = int(NUMREL)

x = np.array([1, AGEMEN, NBIOPS, AGEFLB, NUMREL,
             AGECAT, NBIOPS * AGECAT, AGEFLB * NUMREL])

factors = np.array([-0.74948, 0.09401, 0.52926, 0.21863,
                   0.95830, 0.01081, -0.28804, -0.19081])

f = factors.dot(x.T)

coefficient = 10**f

base_line_risk = 3.85 if AGECAT == 1 else 1.05

total_risk = coefficient*base_line_risk


print(round(total_risk, 2))
sys.stdout.flush()