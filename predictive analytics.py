# predict.py
import sys
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

def predict_consumption(data):
    df = pd.DataFrame(data)
    df['date'] = pd.to_datetime(df['date'])
    df['days'] = (df['date'] - df['date'].min()).dt.days
    X = df[['days']]
    y = df['consumption']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    model = LinearRegression()
    model.fit(X_train, y_train)

    future_days = pd.DataFrame({'days': range(df['days'].max() + 1, df['days'].max() + 31)})
    predictions = model.predict(future_days)

    return predictions.tolist()

if __name__ == "__main__":
    import json
    data = json.loads(sys.argv[1])
    print(json.dumps(predict_consumption(data)))
